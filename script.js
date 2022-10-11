var num_pedido = 0; // index dos pedidos
fetch("data.json").then(function(responste){ //Pegando JSON da pasta local
    return responste.json(); // convertendo JSON para objeto
}).then((objectData)=>{
    console.log(objectData); // organizando os objetos no console
    let tableData = ""; //criando variavel para armazenar os valores
    let tableinfo = "";
    objectData.map((values)=>{
        num_pedido++;
        tableData += ` <!--tabela 1-->
        <div class="line0${num_pedido}" id="line0${num_pedido}">${num_pedido}</div>
        <div class="line" id="line">${values.statusDescription}</div>
        <div class="line" id="line">${values.authorizedDate}</div>
        <div class="line" id="line">R$${values.value}</div>     
        `;  
        tableinfo += `<!--tabela cliente-->
        <div id="tabela${num_pedido}">
        <div class="info0${num_pedido}" id="info0${num_pedido}">nome</div>
        <div class="info0${num_pedido}" id="info0${num_pedido}">${values.clientProfileData.firstName +" " +values.clientProfileData.lastName}</div>
        <div class="info0${num_pedido}" id="info0${num_pedido}">documento</div>
        <div class="info0${num_pedido}" id="info0${num_pedido}">${values.clientProfileData.document}</div>
        <div class="info0${num_pedido}" id="info0${num_pedido}">tipo de documento</div>
        <div class="info0${num_pedido}" id="info0${num_pedido}">${values.clientProfileData.documentType}</div> 
        <div class="info0${num_pedido}" id="info0${num_pedido}">telefone</div>
        <div class="info0${num_pedido}" id="info0${num_pedido}">${values.clientProfileData.phone}</div> 
        <div class="info0${num_pedido}" id="info0${num_pedido}">E-mail</div>
        <div class="info0${num_pedido}" id="info0${num_pedido}">${values.clientProfileData.email}</div>
        <div class="info0${num_pedido}" id="info0${num_pedido}" style="background-color: #4672C0">Rua</div>
        <div class="info0${num_pedido}" id="info0${num_pedido}" style="background-color: #4672C0">${values.shippingData.address.street}</div>
        <div class="info0${num_pedido}" id="info0${num_pedido}" style="background-color: #4672C0">Bairro</div>
        <div class="info0${num_pedido}" id="info0${num_pedido}" style="background-color: #4672C0">${values.shippingData.address.neighborhood}</div>
        <div class="info0${num_pedido}" id="info0${num_pedido}" style="background-color: #4672C0">Cidade</div>
        <div class="info0${num_pedido}" id="info0${num_pedido}" style="background-color: #4672C0">${values.shippingData.address.city}</div>
        <div class="info0${num_pedido}" id="info0${num_pedido}" style="background-color: #4672C0">Estado</div>
        <div class="info0${num_pedido}" id="info0${num_pedido}" style="background-color: #4672C0">${values.shippingData.address.state}</div>
        <div class="info0${num_pedido}" id="info0${num_pedido}" style="background-color: #4672C0">CEP</div>
        <div class="info0${num_pedido}" id="info0${num_pedido}" style="background-color: #4672C0">${values.shippingData.address.postalCode}</div>
        <div class="info0${num_pedido}" id="info0${num_pedido}">Produto</div>
        <div class="info0${num_pedido}" id="info0${num_pedido}">${values.itemMetadata.Items[0].Name}</div>
        <div class="info0${num_pedido}" id="info0${num_pedido}">Quantidade</div>
        <div class="info0${num_pedido}" id="info0${num_pedido}">${values.itemMetadata.Items[0].Seller}</div>
        <div class="info0${num_pedido}" id="info0${num_pedido}">Valor</div>
        <div class="info0${num_pedido}" id="info0${num_pedido}">${values.value}</div> 
        <div class="info0${num_pedido}" id="info0${num_pedido}">Total</div>
        <div class="info0${num_pedido}" id="info0${num_pedido}">${values.value}</div> 
        <div class="info0${num_pedido}" id="info0${num_pedido}">Foto</div>
        <div class="info0${num_pedido}" id="info0${num_pedido}"><img src='${values.itemMetadata.Items[0].ImageUrl}'></div> 

        <div id="table_nota">
        <div class="nota0${num_pedido}" id="nota0${num_pedido}" style="background-color: #4672C0">Número da nota</div>
        <div class="nota0${num_pedido}" id="nota0${num_pedido}" style="background-color: #4672C0">${values.packageAttachment.packages[1]?.invoiceNumber}</div> 
        <div class="nota0${num_pedido}" id="nota0${num_pedido}" style="background-color: #4672C0">Data e hora</div>
        <div class="nota0${num_pedido}" id="nota0${num_pedido}" style="background-color: #4672C0">${values.packageAttachment.packages[1]?.issuanceDate}</div> 
        <div class="nota0${num_pedido}" id="nota0${num_pedido}" style="background-color: #4672C0">Valor NF</div>
        <div class="nota0${num_pedido}" id="nota0${num_pedido}" style="background-color: #4672C0">${values.packageAttachment.packages[1]?.invoiceValue}</div> 
        <div class="nota0${num_pedido}" id="nota0${num_pedido}" style="background-color: #4672C0">Link nota fiscal</div>
        <div class="nota0${num_pedido}" id="nota0${num_pedido}" style="background-color: #4672C0"><a href="${values.packageAttachment.packages[1]?.invoiceUrl}">clique aqui</a></div> 
        </div>
        </div>
        `
    })
    document.getElementById('output').innerHTML = tableData; //Colocando as informações
    document.getElementById('wrapper_info').innerHTML = tableinfo; //Colocando as informações
    var info01 = document.getElementById('info01'); // Pegando as informações dos usuários
    var info02 = document.getElementById("info02"); // Pegando as informações dos usuários
    var info03 = document.getElementById("info03"); // Pegando as informações dos usuários

    document.getElementById('line01').addEventListener("click", ()=>{
        document.getElementById('tabela1').style.display = "grid"; //limpando os que não são os indicados
        document.getElementById('tabela2').style.display = "none"; //limpando os que não são os indicados
        document.getElementById('tabela3').style.display = "none";  //limpando os que não são os indicados
    })
    document.getElementById('line02').addEventListener("click", ()=>{
        document.getElementById('tabela2').style.display = "grid"; //limpando os que não são os indicados
        document.getElementById('tabela1').style.display = "none"; //limpando os que não são os indicados
        document.getElementById('tabela3').style.display = "none";  //limpando os que não são os indicados
    })
    document.getElementById('line03').addEventListener("click", ()=>{
        document.getElementById('tabela3').style.display = "grid"; //limpando os que não são os indicados
        document.getElementById('tabela2').style.display = "none"; //limpando os que não são os indicados
        document.getElementById('tabela1').style.display = "none";  //limpando os que não são os indicados
    })
    var nota = document.getElementById("nota01");
    var valor = nota.value;
    if(valor = "undefined"){
        document.getElementById("table_nota").style.display = "none"
    }
})
