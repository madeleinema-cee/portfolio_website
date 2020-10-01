from flask import render_template, redirect, url_for, flash, request
from portfolio import app, mail
from portfolio.forms import ContactForm
from flask_mail import Message


@app.route('/', methods=['GET', 'POST'])
def index():
    form = ContactForm()
    if form.validate_on_submit():
        if request.method == 'POST':
            send_contact_email(form)
            flash(f'Your message has been sent!', 'success')
            return redirect(url_for('index'))
    return render_template('home.html', form=form)


def send_contact_email(form):
    msg = Message('Contact Message from madeleinema.com',
                  sender='donotreply@info.com',
                  recipients=['madeleinema07@gmail.com'])
    msg.body = f'''A message from madeleinema.com.
__________________________
From: {form.name.data}
__________________________
Email: {form.email.data}
__________________________
Message: {form.message.data}
        '''
    mail.send(msg)
