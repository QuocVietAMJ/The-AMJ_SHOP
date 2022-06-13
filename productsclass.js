class Product{
    constructor(id,EnName,photo,price){
        this.id=id;
        this.EnName=EnName;
        this.photo=photo;
        this.price=price;
    }

    show(handle){
        //DOm
        var div=document.createElement('div');
        div.setAttribute('class','card');
        // Ảnh minh họa sản phẩm
        var img=document.createElement('img');
        img.setAttribute('src', this.photo);
        img.setAttribute('alt','');
        img.setAttribute('width',"100%");
        img.setAttribute('height',"250");
        // Tên sản phẩm 
        var h1=document.createElement('h1');
        var h1Text=document.createTextNode(this.EnName);
        h1.appendChild(h1Text);
        // Giá sản phẩm 
        var pPrice=document.createElement('p');
        pPrice.setAttribute('class','price');
        var pText=document.createTextNode("$" +this.price);
        pPrice.appendChild(pText);
        // Nút mua hàng
        var pOrder=document.createElement('p');
        var button=document.createElement('button');
        var buttonText =document.createTextNode("Mua hàng");
        button.appendChild(buttonText);
        button.setAttribute('onclick','ordered('+this.id+');');
        pOrder.appendChild(button);
        // Hiển thị thông tin sản phẩm
        div.appendChild(img);
        div.appendChild(h1);
        div.appendChild(pPrice);
        div.appendChild(pOrder);
        handle.appendChild(div);

    }
}