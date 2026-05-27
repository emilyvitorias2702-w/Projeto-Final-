const produtos = [

/* =========================
   BRASIL
========================= */

{
    id: 1,
    nome: "Camisa Brasil Home",
    descricao: "Camisa oficial da Seleção Brasileira Copa do Mundo 2026.",
    preco: 159.90,
    categoria: "Camisas",
    pais: "Brasil",
    estoque: 20,
    tamanhos: ["P", "M", "G", "GG"],
    imagens: ["assets/img/Imagem do Pin de história.png"]
},

{
    id: 2,
    nome: "Camisa Brasil Away",
    descricao: "Camisa oficial da Seleção Brasileira.",
    preco: 219.90,
    categoria: "Camisas",
    pais: "Brasil",
    estoque: 20,
    tamanhos: ["P", "M", "G", "GG"],
    imagens: ["assets/img/Camisa Seleção Brasil II 22_23 Nike - Azul.png"]
},

{
    id: 3,
    nome: "Camisa Brasil Especial",
    descricao: "Camisa oficial da Seleção Brasileira.",
    preco: 325.90,
    categoria: "Camisas",
    pais: "Brasil",
    estoque: 20,
    tamanhos: ["P", "M", "G", "GG"],
    imagens: ["assets/img/brasil 1.jpg"]
},

{
    id: 4,
    nome: "Pulseira Brasil",
    descricao: "Pulseira oficial da Seleção Brasileira.",
    preco: 25.90,
    categoria: "Acessórios",
    pais: "Brasil",
    estoque: 15,
    tamanhos: ["Único"],
    imagens: ["assets/img/pulseira brasil.png"]
},

{
    id: 5,
    nome: "Bola Brasil",
    descricao: "Bola oficial da Seleção Brasileira.",
    preco: 89.90,
    categoria: "Acessórios",
    pais: "Brasil",
    estoque: 15,
    tamanhos: ["Único"],
    imagens: ["assets/img/bola brasil - Copia.png"]
},

{
    id: 6,
    nome: "Boné Brasil",
    descricao: "Boné oficial da Seleção Brasileira.",
    preco: 45.90,
    categoria: "Acessórios",
    pais: "Brasil",
    estoque: 15,
    tamanhos: ["Único"],
    imagens: ["assets/img/bonebrasil.png"]
},

{
    id: 7,
    nome: "Chuteira Brasil",
    descricao: "Chuteira profissional da Seleção Brasileira.",
    preco: 476.90,
    categoria: "Chuteiras",
    pais: "Brasil",
    estoque: 10,
    tamanhos: ["38", "39", "40", "41", "42"],
    imagens: ["assets/img/neryma2.jpg"]
},

{
    id: 8,
    nome: "Chuteira Brasil Elite",
    descricao: "Chuteira profissional da Seleção Brasileira.",
    preco: 320.90,
    categoria: "Chuteiras",
    pais: "Brasil",
    estoque: 10,
    tamanhos: ["38", "39", "40", "41", "42"],
    imagens: ["assets/img/neymar1.png"]
},

{
    id: 9,
    nome: "Chuteira Neymar Edition",
    descricao: "Chuteira inspirada no Neymar.",
    preco: 568.90,
    categoria: "Chuteiras",
    pais: "Brasil",
    estoque: 10,
    tamanhos: ["38", "39", "40", "41", "42"],
    imagens: ["assets/img/neymar.png"]
},

/* =========================
   PORTUGAL
========================= */

{
    id: 10,
    nome: "Camisa Portugal Home",
    descricao: "Camisa oficial da Seleção Portuguesa.",
    preco: 255.90,
    categoria: "Camisas",
    pais: "Portugal",
    estoque: 20,
    tamanhos: ["P", "M", "G", "GG"],
    imagens: ["assets/img/portugal1.jpg"]
},

{
    id: 11,
    nome: "Camisa Portugal Away",
    descricao: "Camisa oficial da Seleção Portuguesa.",
    preco: 325.90,
    categoria: "Camisas",
    pais: "Portugal",
    estoque: 20,
    tamanhos: ["P", "M", "G", "GG"],
    imagens: ["assets/img/portugal2.jpg"]
},

{
    id: 12,
    nome: "Camisa Portugal Especial",
    descricao: "Camisa oficial da Seleção Portuguesa.",
    preco: 456.90,
    categoria: "Camisas",
    pais: "Portugal",
    estoque: 20,
    tamanhos: ["P", "M", "G", "GG"],
    imagens: ["assets/img/portugal3.jpg"]
},

{
    id: 13,
    nome: "Pulseira Portugal",
    descricao: "Pulseira oficial da Seleção Portuguesa.",
    preco: 25.90,
    categoria: "Acessórios",
    pais: "Portugal",
    estoque: 15,
    tamanhos: ["Único"],
    imagens: ["assets/img/pulseira portugal.png"]
},

{
    id: 14,
    nome: "Bola Portugal",
    descricao: "Bola oficial da Seleção Portuguesa.",
    preco: 25.90,
    categoria: "Acessórios",
    pais: "Portugal",
    estoque: 15,
    tamanhos: ["Único"],
    imagens: ["assets/img/bola-argentina.png"]
},

{
    id: 15,
    nome: "Boné Portugal",
    descricao: "Boné oficial da Seleção Portuguesa.",
    preco: 25.90,
    categoria: "Acessórios",
    pais: "Portugal",
    estoque: 15,
    tamanhos: ["Único"],
    imagens: ["assets/img/boneportugal.png"]
},

{
    id: 16,
    nome: "Chuteira CR7 Elite",
    descricao: "Chuteira profissional de Portugal.",
    preco: 699.90,
    categoria: "Chuteiras",
    pais: "Portugal",
    estoque: 10,
    tamanhos: ["38", "39", "40", "41", "42"],
    imagens: ["assets/img/cr7 1.png"]
},

{
    id: 17,
    nome: "Chuteira Portugal Nike",
    descricao: "Chuteira oficial de Portugal.",
    preco: 499.90,
    categoria: "Chuteiras",
    pais: "Portugal",
    estoque: 10,
    tamanhos: ["38", "39", "40", "41", "42"],
    imagens: ["assets/img/cr7 2.jpg"]
},

{
    id: 18,
    nome: "Chuteira Portugal Puma",
    descricao: "Chuteira oficial de Portugal.",
    preco: 799.90,
    categoria: "Chuteiras",
    pais: "Portugal",
    estoque: 10,
    tamanhos: ["38", "39", "40", "41", "42"],
    imagens: ["assets/img/cr7 3.png"]
},

/* =========================
   ARGENTINA
========================= */

{
    id: 19,
    nome: "Camisa Argentina Home",
    descricao: "Camisa oficial da Argentina.",
    preco: 299.90,
    categoria: "Camisas",
    pais: "Argentina",
    estoque: 20,
    tamanhos: ["P", "M", "G", "GG"],
    imagens: ["assets/img/blusaargetina.png"]
},

{
    id: 20,
    nome: "Camisa Argentina Home",
    descricao: "Camisa oficial da Argentina.",
    preco: 299.90,
    categoria: "Camisas",
    pais: "Argentina",
    estoque: 20,
    tamanhos: ["P", "M", "G", "GG"],
    imagens: ["assets/img/argentina2.png"]
},

{
    id: 21,
    nome: "Camisa Argentina Away",
    descricao: "Camisa oficial da Argentina.",
    preco: 329.90,
    categoria: "Camisas",
    pais: "Argentina",
    estoque: 20,
    tamanhos: ["P", "M", "G", "GG"],
    imagens: ["assets/img/argentina3.png"]
},
{
    id: 13,
    nome: "Pulseira Argentina",
    descricao: "Pulseira oficial da Seleção Argentina.",
    preco: 25.90,
    categoria: "Acessórios",
    pais: "Argentina",
    estoque: 15,
    tamanhos: ["Único"],
    imagens: ["assets/img/pulseira argentina.png"]
},

{
    id: 14,
    nome: "Bola Argentina",
    descricao: "Bola oficial da Seleção Argentina.",
    preco: 25.90,
    categoria: "Acessórios",
    pais: "Argentina",
    estoque: 15,
    tamanhos: ["Único"],
    imagens: ["assets/img/bola portugal - Copia.jpg"]
},

{
    id: 15,
    nome: "Boné Argentina",
    descricao: "Boné oficial da Seleção Argentina.",
    preco: 25.90,
    categoria: "Acessórios",
    pais: "Argentina",
    estoque: 15,
    tamanhos: ["Único"],
    imagens: ["assets/img/boneargetina.png"]
},

{
    id: 16,
    nome: "Chuteira CR7 Elite",
    descricao: "Chuteira profissional de Portugal.",
    preco: 699.90,
    categoria: "Chuteiras",
    pais: "Portugal",
    estoque: 10,
    tamanhos: ["38", "39", "40", "41", "42"],
    imagens: ["assets/img/messi1.jpg"]
},

{
    id: 17,
    nome: "Chuteira Argentina Nike",
    descricao: "Chuteira oficial de Argentina.",
    preco: 499.90,
    categoria: "Chuteiras",
    pais: "Argentina",
    estoque: 10,
    tamanhos: ["38", "39", "40", "41", "42"],
    imagens: ["assets/img/messi2.png"]
},

{
    id: 18,
    nome: "Chuteira Argentina Puma",
    descricao: "Chuteira oficial de Argentina.",
    preco: 799.90,
    categoria: "Chuteiras",
    pais: "Argentina",
    estoque: 10,
    tamanhos: ["38", "39", "40", "41", "42"],
    imagens: ["assets/img/messi3.png"]
},

];

// =========================
// CARRINHO
// =========================

let carrinho =
JSON.parse(localStorage.getItem("carrinho")) || [];

// =========================
// MOSTRAR PRODUTOS
// =========================

function mostrarProdutos(lista){

    const produtosDiv =
    document.getElementById("produtos");

    if(!produtosDiv) return;

    produtosDiv.innerHTML = "";

    lista.forEach(produto => {

        let opcoesTamanho = "";

        produto.tamanhos.forEach(tamanho => {

            opcoesTamanho += `
                <option>${tamanho}</option>
            `;

        });

        produtosDiv.innerHTML += `

        <div class="col-md-4 mb-4">

            <div class="card h-100 shadow border-0">

                <img src="${produto.imagens[0]}"
                     class="card-img-top imagem-produto"
                     alt="${produto.nome}">

                <div class="card-body">

                    <h4 class="fw-bold">
                        ${produto.nome}
                    </h4>

                    <p>
                        ${produto.descricao}
                    </p>

                    <h5 class="text-success fw-bold">
                        R$ ${produto.preco.toFixed(2)}
                    </h5>

                    <p>
                        <strong>Estoque:</strong>
                        ${produto.estoque}
                    </p>

                    <label class="fw-bold">
                        Tamanho
                    </label>

                    <select class="form-select mb-2"
                            id="tamanho-${produto.id}">

                        ${opcoesTamanho}

                    </select>

                    <label class="fw-bold">
                        Quantidade
                    </label>

                    <input type="number"
                           min="1"
                           value="1"
                           class="form-control mb-3"
                           id="quantidade-${produto.id}">

                    <button class="btn btn-success w-100 fw-bold"
                            onclick="adicionarCarrinho(${produto.id})">

                        Adicionar ao Carrinho

                    </button>

                </div>

            </div>

        </div>
        `;

    });

}

// =========================
// ADICIONAR CARRINHO
// =========================

function adicionarCarrinho(id){

    const produto =
    produtos.find(p => p.id === id);

    const tamanho =
    document.getElementById(`tamanho-${id}`).value;

    const quantidade =
    parseInt(document.getElementById(`quantidade-${id}`).value);

    if(quantidade > produto.estoque){

        alert("Quantidade indisponível!");

        return;

    }

    carrinho.push({

        nome: produto.nome,
        preco: produto.preco,
        tamanho: tamanho,
        quantidade: quantidade

    });

    salvarCarrinho();

    atualizarCarrinho();

}

// =========================
// ATUALIZAR CARRINHO
// =========================

function atualizarCarrinho(){

    const lista =
    document.getElementById("lista-carrinho");

    const totalSpan =
    document.getElementById("total");

    if(!lista || !totalSpan) return;

    lista.innerHTML = "";

    let total = 0;

    carrinho.forEach((produto,index)=>{

        let subtotal =
        produto.preco * produto.quantidade;

        total += subtotal;

        lista.innerHTML += `

        <li class="list-group-item">

            <strong>${produto.nome}</strong>

            <br>

            Tamanho: ${produto.tamanho}

            <br>

            Quantidade: ${produto.quantidade}

            <br><br>

            <strong>
                R$ ${subtotal.toFixed(2)}
            </strong>

            <br><br>

            <button
                class="btn btn-danger btn-sm"
                onclick="removerCarrinho(${index})">

                Remover

            </button>

        </li>
        `;

    });

    totalSpan.innerText =
    total.toFixed(2);

}

// =========================
// REMOVER
// =========================

function removerCarrinho(index){

    carrinho.splice(index,1);

    salvarCarrinho();

    atualizarCarrinho();

}

// =========================
// SALVAR
// =========================

function salvarCarrinho(){

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

}

// =========================
// PESQUISAR
// =========================

function pesquisarProduto(){

    const valor =
    document.getElementById("pesquisa")
    .value.toLowerCase();

    const filtrados =
    produtos.filter(produto =>

        produto.nome.toLowerCase()
        .includes(valor)

    );

    mostrarProdutos(filtrados);

}

// =========================
// FILTRAR PAÍS
// =========================

function filtrarPais(pais){

    const filtrados =
    produtos.filter(produto =>

        produto.pais === pais

    );

    mostrarProdutos(filtrados);

}

// =========================
// PAYPAL
// =========================

function iniciarPaypal(){

    if(typeof paypal === "undefined") return;

    paypal.Buttons({

        createOrder:function(data, actions){

            let total = carrinho.reduce(

                (acc,item)=>

                acc + (item.preco * item.quantidade),

                0

            );

            if(total <= 0){

                alert("Carrinho vazio!");

                return;

            }

            return actions.order.create({

                purchase_units:[{

                    amount:{

                        value: total.toFixed(2)

                    }

                }]

            });

        },

        onApprove:function(data, actions){

            return actions.order.capture()

            .then(function(){

                alert("Pagamento aprovado!");

                carrinho = [];

                salvarCarrinho();

                atualizarCarrinho();

            });

        }

    }).render('#paypal-button-container');

}

// =========================
// INICIAR
// =========================

mostrarProdutos(produtos);

atualizarCarrinho();

iniciarPaypal();