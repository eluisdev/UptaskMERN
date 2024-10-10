import nodemailer from 'nodemailer';

const emailRegistro = async (datos) => {
    const { email, token, nombre } = datos;
    
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    //Informacion EMAIL
    const info = await transport.sendMail({
        from: '"UpTask - Administrador de proyectos" <cuentas@uptaks.com>',
        to: email,
        subject: "UpTask - Comprueba tu cuenta",
        text: "Comprueba tu cuenta en UpTask",
        html: `<p>Hola: ${nombre} Comprueba tu cuenta en UpTaks</p>
            <p>Tu cuenta ya esta casi lista solo debes comprobarla en el siguiente enlace: <a href="${process.env.FRONTEND_URL}/confirmar/${token}" >Comprobar Cuenta</a></p>
            <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
        ` 
    })
};

const emailOlvidePassword = async (datos) => {
    const { email, token, nombre } = datos;
    
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    //Informacion EMAIL
    const info = await transport.sendMail({
        from: '"UpTask - Administrador de proyectos" <cuentas@uptaks.com>',
        to: email,
        subject: "UpTask - Reestablece tu password",
        text: "Reestablece tu password",
        html: `<p>Hola: ${nombre} has solicitado reestablecer tu password</p>
            <p>Sigue el siguiente enlace para generar un nuevo passwrod: <a href="${process.env.FRONTEND_URL}/olvide-password/${token}" >Reestablecer Password</a></p>
            <p>Si tu no solicitaste este email, puedes ignorar este mensaje</p>
        ` 
    })
};

export {
    emailRegistro,
    emailOlvidePassword
}