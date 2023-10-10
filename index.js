<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="facebook-domain-verification" content="oghjpvckuvqtree9bcegxtqu1xr2qk" />
<link rel="./utils/logo.png" href="/caminho/favicon.ico">
 <link rel="stylesheet" href="styles.css">
<title>Double App</title>
   
</head>

<body>

    <div class="container">
        <div class="banner" style="margin-bottom: -5px;">
            <img src="./utils/logo.png" alt="Oportunidade Única Identificada">
        </div>
                <!--<a href="https://bit.ly/3mCAnJW"><button id="mines" class="generate-opportunity"> Mines </button></a>-->
        <div id="text">
            <p id="texto" class="texto"><b> 🔥Gerar Seu Sinal</b>🔥</p>
        </div>
        <div id="game-container" class="game-container">
           <!-- <div class="game-grid"> -->
            <div class="video-container">
              <video id="double-result" src="./utils/000.mp4" width="100%" height="100%" autoplay style="transform: scale(1.3); overflow-x: hidden;"></video>
            </div>
              <!-- </div> -->
        </div>
        <p id="info" class="info"></p>
        <button id="generate-opportunity" class="generate-opportunity">Gerar Entrada</button>
        <br/>
        <!-- <a target="_blank"  href="https://bit.ly/3mCAnJW"><button id="cadastro" class="cadastro">Cadastre-se Aqui</button></a> -->
        <!-- <br /> -->
         <a onclick ="changegameIframeSrc()" href="#game-iframe"><button id="cadastro" class="generate-opportunity">IR PARA O JOGO</button></a>
        <!-- https://bit.ly/3mCAnJW -->
        <br/>
        <a target="_blank" href="https://api.whatsapp.com/send?phone=5511957412221&text=Ol%C3%A1,%20quero%20jogar%20no%20double"><button id="cadastro" class="generate-opportunity">SUPORTE</button></a>

        
        <span class="playpix"><b></b></span>
        <br />

        <!-- <p id="cadastro-texto"><b>☝️Clique no botão vermelho </b> para efetuar o cadastro na <b>ÚNICA</b> plataforma que o robô analisa.</p> -->
        
        <div style="width: 90%; height: 650px; padding: 25px; border-radius: 41px;">
          <iframe id="game-iframe" src="https://go.aff.donald.bet/v62h37ed" width="100%" height="100%" style="border-radius: 15px; border: none;">...</iframe> 
        </div>

        <!-- <div id="iframe-disabled">
             <iframe src="https://go.aff.donald.bet/v62h37ed" style="visibility: hidden;" width="1px" height="1px">...</iframe> 
        </div> -->
        
        <!-- <div style="margin: 20px 0;"></div> -->
         <!--target="_blank"-->
    </div>

    
<style>
    .playpix {
    color: white;
    margin-top: 15px;
    font-weight: bold;
}

</style>

<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script> -->
<script src="./script.js"></script>

</body>

</html>




<!DOCTYPE html>
<html>
<head>
  <title>Game Grid Animation</title>
  <style>
    .game-card {
      display: flex;
      background-color: green;
      padding: 15px;
      width: 100%;
    }
