import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

export function TermsAndConditions({ open, close, accept, setAccept }) {

  return (
    <Modal
      title="Términos y Condiciones"
      centered={true}
      visible={open}
      onCancel={close}
      onOk={setAccept}
      okText="Acepto"
      cancelText="Rechazar"
    >
      <div className="content-modal">
        <div>
          <p>
            El presente Política de Privacidad establece los términos en que
            <b> Mobilize Learning </b> usa y protege la información que es proporcionada
            por sus usuarios al momento de utilizar su sitio web.
            Esta compañía está comprometida con la seguridad de los datos de sus usuarios.
            Cuando le pedimos llenar los campos de información personal con la
            cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará
            de acuerdo con los términos de este documento. Sin embargo esta Política
            de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le
            recomendamos y enfatizamos revisar continuamente esta página para asegurarse
            que está de acuerdo con dichos cambios.
          </p>
        </div>
        <div>
          <p className="content-modal__title">
            Información que es recogida
          </p>
          <p>
            Nuestro sitio web podrá recoger información personal por ejemplo: Nombre,  información
            de contacto como  su dirección de correo electrónica e información demográfica.
            Así mismo cuando sea necesario podrá ser requerida información específica para
            procesar algún pedido o realizar una entrega o facturación.
          </p>

        </div>
        <div>
          <p className="content-modal__title">
            Uso de la información recogida
          </p>
          <p>
            Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible,
            particularmente para mantener un registro de usuarios, de pedidos en caso que aplique,
            y mejorar nuestros productos y servicios.  Es posible que sean enviados correos electrónicos
            periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra
            información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio,
            estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser
            cancelados en cualquier momento.
            <br />
            Mobilize Learning está altamente comprometido para cumplir con el compromiso de mantener
            su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente
            para asegurarnos que no exista ningún acceso no autorizado.
          </p>
        </div>
        <div>
          <p className="content-modal__title">
            Enlaces a Terceros
          </p>
          <p>
            Este sitio web pudiera contener enlaces a otros sitios que pudieran ser de su interés.
            Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos
            control sobre al sitio al que es redirigido y por lo tanto no somos responsables de
            los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros.
            Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es
            recomendable que los consulte para confirmar que usted está de acuerdo con estas.
          </p>
        </div>
        <div>
          <p className="content-modal__title">
            Control de su información personal
          </p>
          <p>
            En cualquier momento usted puede restringir la recopilación o el uso de la información
            personal que es proporcionada a nuestro sitio web.  Cada vez que se le solicite rellenar
            un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir
            información por correo electrónico.  <br />En caso de que haya marcado la opción de recibir
            nuestro boletín o publicidad usted puede cancelarla en cualquier momento. <br />
            Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada
            sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.
            <b> Mobilize Learning</b> Se reserva el derecho de cambiar los términos de la presente
            Política de Privacidad en cualquier momento.
          </p>
        </div>
      </div>

    </Modal>
  )
}

TermsAndConditions.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  accept: PropTypes.bool.isRequired,
  setAccept: PropTypes.func.isRequired
};