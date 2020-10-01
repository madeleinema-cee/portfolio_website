from flask_wtf import FlaskForm, RecaptchaField
from wtforms import StringField, TextAreaField, SubmitField
from wtforms.validators import data_required, length,email


class ContactForm(FlaskForm):
    name = StringField("Name",
                       validators=[data_required(), length(min=2, max=20)])
    email = StringField("Email",
                        validators=[email(), data_required()])
    message = TextAreaField("Message",
                            validators=[data_required(), length(min=2, max=200)])
    recap = RecaptchaField()
    submit = SubmitField('Submit')

