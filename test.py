from mailjet_rest import Client as MailJetApi
from dotenv import dotenv_values

environment_variables = dotenv_values('.env')


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
                    "Email": "ostelia.group@gmail.com",
                    "Name": "Hi"
                }
            ],
            "TemplateID": int(environment_variables['MAILJET_TEMPLATE_ID']),
            "TemplateLanguage": True,
            "Subject": "[Lab-Work] Contact",
            "Variables": {
                "name": 'NAME',
                "email": 'EMAIL',
                "phone": 'PHONE',
                "organization": 'ORG',
                "message": 'MESSAGE'
            }
        }
    ]
}

# Send email.
mail = mailjet.send.create(data=data)
print(mail.status_code)