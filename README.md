#### Installation (Outdated but still works)
```bash
# python3.9 is often not available natively,
# but we can rely on deadsnakes to provide it.
# https://github.com/deadsnakes/python3.9
sudo add-apt-repository -y ppa:deadsnakes

# Install required software for running the website back-end part.
sudo apt install -y python3.9-dev python3.9-distutils build-essential

# Install python's package manager, pip
# it's used to install python-specific dependencies.
wget https://bootstrap.pypa.io/get-pip.py
python3.9 get-pip.py && rm get-pip.py

# Make sure pip and setuptools are up to date.
python3.9 -m pip install -U pip setuptools pipenv

# Create python3.9 virtual environment and install dependencies.
PIPENV_VENV_IN_PROJECT=1 python3.9 -m pipenv install
```

#### Run
```bash
# Run back-end part using the virtenv python.
./.venv/bin/python ./main.py
```
