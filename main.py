from flask import (
    Flask,
    render_template,
    send_from_directory,
    request,
    jsonify,
    make_response,
)
from mailjet_rest import Client as MailJetApi
from dotenv import dotenv_values

from re import match


environment_variables = dotenv_values('.env')

app = Flask(
    __name__,
    template_folder='./app/',
    static_folder='./app/',
)

@app.route('/<path:filename>')
def send_pic(filename):
    """
    Fix 404 for all static files since we don't use jinja on templates.
    """

    return send_from_directory(app.static_folder, filename)

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/contact-form', methods=['POST'])
def form():
    required_fields = [
        'name',
        'phone',
        'email',
        'organization',
    ]

    data = request.form

    # Return error if missing required field.
    for required_field in required_fields:
        field_content = data.get(required_field)

        if not field_content:
            return make_response(jsonify(
                message=f'Please fill the {required_field} field.'
            ), 400)

    # Return error e-mail address is invalid.
    if not bool(match(r'^\S+@\S+\.\S+$', data.get('email'))):
        return make_response(jsonify(
            message=f'Invalid e-mail address, please try again.'
        ), 400)

    mailjet = MailJetApi(
        auth=(environment_variables['MAILJET_API_KEY'], environment_variables['MAILJET_SECRET']),
        version='v3.1',
    )

    data = {
        'Messages': [
            {
                "From": {
                    "Email": "no-reply@kurai.pw",
                    "Name": "no-reply"
                },
                "To": [
                    {
                        "Email": data.get('email'),
                        "Name": "Hello World"
                    }
                ],
                "TemplateID": int(environment_variables['MAILJET_TEMPLATE_ID']),
                "TemplateLanguage": True,
                "Subject": "[Lab-Work] Contact",
                "Variables": {
                    "name": data.get('name'),
                    "email": data.get('email'),
                    "phone": data.get('phone'),
                    "organization": data.get('organization'),
                    "message": data.get('message')
                }
            }
        ]
    }

    # Send email.
    mail = mailjet.send.create(data=data)

    if mail.status_code != 200:
        return make_response(jsonify(
            message='Something wen\'t wrong, cannot send e-mail. Please contact website developer.'
        ), 400)

    # Everything ok, send 200.
    return make_response(jsonify(
        message='Thanks you.'
    ), 200)


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
