/** */

//FUNÇÃO DE CARREGAMENTO DE COMPONENTES HTML.
async function carregarComponente(id, arquivo){
    await fetch(arquivo)
    .then((data)=> data.text())
    .then((innerHTML)=>{
        document.getElementById(id).innerHTML = innerHTML;
    });
    
}

//COMPONENTE HEADER
carregarComponente('header','header.html').then(()=>{
    /**
     * OBITENDO ELEMENTO POR ID.
     */
    const menuContainer = document.getElementById("menuContainer");
    const mobileContainer = document.getElementById("mobileContainer");
    const desktopContainer = document.getElementById("desktopContainer");
    /**
     *  ADICIONANDO EVENTO DE 'CLICK' PARA O ELEMENTO.
     */
    menuContainer.addEventListener('click',()=>{
        mobileContainer.classList.toggle('active');
        menuContainer.classList.toggle('open');
    });
    /**
     *  ADICIONANDO EVENTO DE 'RESIZE' PARA O ELEMENTO.
     *  MUDANÇA DE TAMANHO DE TELA.
     */
    window.addEventListener('resize',()=>{
        mobileContainer.classList.remove('active');
        menuContainer.classList.remove('open');
    });
    /**
     *  EVENTO AO CLICAR DEIXAR SELECIONADO.
     */
    
    desktopContainer.querySelectorAll('a').forEach(element=>{
        element.addEventListener("click",(e)=>{
            //e.preventDefault();
            desktopContainer.querySelectorAll('a').forEach(l=>{l.classList.remove('clicked')});
            element.classList.add('clicked');
        });
    });
    mobileContainer.querySelectorAll('a').forEach(element=>{
        element.addEventListener("click",(e)=>{
            //e.preventDefault();
            mobileContainer.querySelectorAll('a').forEach(l=>{l.classList.remove('clicked')});
            element.classList.add('clicked');
        });
    });
    

});

carregarComponente('main','main.html');
carregarComponente('footer','footer.html');

/**
 *  SEÇÕES
 */
//SOBREMIN
carregarComponente('sobremin','sobremin.html');
carregarComponente('formacao','formacao.html');
carregarComponente('portifolio','portifolio.html');
carregarComponente('contato','contato.html').then(()=>{
    const enviar = document.getElementById("enviar");
    enviar.addEventListener("click",()=>{
        alert('MENSAGEM ENVIADA, OBRIGADO PELO CONTATO! ;)')
    });  
});