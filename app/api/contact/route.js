import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inicializa Resend con la key. Si no está en .env, dará error al enviar
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const { name, email, service, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Faltan campos obligatorios' },
                { status: 400 }
            );
        }

        const data = await resend.emails.send({
            from: 'AlbaLabs Contacto <onboarding@resend.dev>', // Cambiar por dominio real, ej: no-reply@albalabs.com
            to: ['contactoalbastudioweb@gmail.com'],
            subject: `Nueva consulta de ${name} — AlbaLabs`,
            html: `
        <h2>Nueva Consulta de Proyecto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Servicio de interés:</strong> ${service || 'No especificado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Error enviando email:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor al enviar email' },
            { status: 500 }
        );
    }
}
