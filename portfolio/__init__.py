from flask import Flask

from flask_mail import Mail
import config

app = Flask(__name__)
app.config['SECRET_KEY'] = config.secret_keys['secret_key']
app.config['SESSION_COOKIE_SECURE'] = False

app.config['RECAPTCHA_USE_SSL'] = False
app.config['RECAPTCHA_PUBLIC_KEY'] = config.secret_keys['recap_public_key']
app.config['RECAPTCHA_PRIVATE_KEY'] = config.secret_keys['recap_private_key']

app.config['MAIL_SERVER'] = 'smtp.googlemail.com'
app.config['MAIL_PORT'] = '587'
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = config.email['user']
app.config['MAIL_PASSWORD'] = config.email['password']
mail = Mail(app)

from portfolio import routes

