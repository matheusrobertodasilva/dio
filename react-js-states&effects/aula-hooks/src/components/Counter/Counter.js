function Counter() {
    let quantity = 10;

    function upQantity(){
        quantity++;
        document.getElementById("counter-box").innerHTML = quantity;
        console.log(quantity)
    }

    return(
        <>
            <h1 id="counter-box">{quantity}</h1>
            <button onClick={upQantity}>Aumentar</button>
        </>
    )
}

export default Counter