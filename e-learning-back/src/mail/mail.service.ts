import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MailService {

    constructor(private readonly mailerService: MailerService) {}

    async sendLoginNotification() {
        this.mailerService.sendMail({
            to: 'ahmedelhoseiny555@gmail.com',
            from: '<no-reply@aaa.com>',
            subject: 'Login Notification',
            html: `<p>Hello <strong>AAAAAAAAA</strong>,</p><p>You have successfully logged in.</p>`,
        }).then(() => {
            console.log('Email sent successfully');
        }).catch((error) => {
            console.error('Error sending email:', error);
        });
    }


}