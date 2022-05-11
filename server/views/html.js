export const template = (name, token, fn) => {
  //https://img.freepik.com/vector-gratis/ilustracion-vector-pictograma-simbolo-internet-marca-verde-color-verde-garrapata-confirmacion-confirmacion-simbolo-internet-pictograma_98292-4639.jpg?t=st=1652149823~exp=1652150423~hmac=b563289304d79d28e63ea534bcfec47972f0d518c3302ce5c1d3788eb3a49508&w=740
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>API DHR</title>
      <style>
        *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        } 
        body{
          background-color: beige;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
          .container{
              max-width: 650px;
              width: 100%;
              margin: 1rem auto;
              box-shadow:  0 0 2px rgb(128, 23, 119);
              color: rgb(128, 23, 119); 
              align-items: center;
              padding: 1rem;
              font-size: 1rem !important;
          }
          .container h1{
              text-align: center;
          }
          .container p {
            text-align: justify;
            color: rgb(20, 5, 19);
          }
          .enlace{
            padding: 2rem;
            text-align: center;
          }
          .enlace .send{
            text-decoration: none;
            padding: 0.8rem;
            background-color: rgb(128, 23, 119);
            color: #fff !important;
            border-radius: 0.2rem;
          } 
          .img_content{
            width: 100%;
            height: 200px;
          }
          .img_content img{
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .container h1, .container p,  .img_content{
            margin-bottom: 1rem;
          }
      </style>
    </head>
    <body>
      ${fn(name, token)}
    </body>
  </html>`;
};

export const templeteRestore = (name, token) => {
  return ` 
  <div class="container">
  <h1 id="text">Acceso a tu cuenta</h1>
  <div class="img_content">
    <img src="https://static.vecteezy.com/system/resources/previews/003/760/389/large_2x/desktop-cyber-security-free-vector.jpg" alt="">
  </div>
  <p>Este correo va dirigido a <b>${name}</b>, ya que recientemente hemos recivido una 
    solicitud para restablecer contraseña de tu cuenta  
    <b>InstApp</b>. 
    si fuiste tu click en el boton restablecer contraseña   
  </p>
  <p><b>Importante</b>: Estimado <i>${name}</i>, tener en cuenta que este enlace tiene un tiempo de caducidad, si este enlace no 
    funciona te sugerimos pedir nuevamente.
  </p>
  <div class="enlace">
    <a href="http://localhost:4000/api/users/reset?token=${token}" class="send">Restablecer contraseña</a>
  </div>
<div>`;
};

export const templeteActive = (name, token) => {
  return ` 
  <div class="container">
  <h1 id="text" onclick="alert('tu cuenta ha sido hackeada')" >Activa tu cuenta ahora </h1>
  <div class="img_content">
    <img src="https://static.vecteezy.com/system/resources/previews/003/760/389/large_2x/desktop-cyber-security-free-vector.jpg" alt="">
  </div>
  <p>Este correo va dirigido a <b>${name}</b>, necesitamos que active su cuenta en    
    <b>InstApp</b>. para ello click en el siguiente enlace.   
  </p>
  <p><b>Importante</b>: Estimado <i>${name}</i>, tener en cuenta que este enlace tiene un tiempo de caducidad, si este enlace no 
    funciona le sugerimos pedir uno nuevo.
  </p>
  <div class="enlace">
  <a href="http://localhost:4000/api/users/active?token=${token}" class="send">Activar Cuenta</a>
  </div>
<div>`;
};
