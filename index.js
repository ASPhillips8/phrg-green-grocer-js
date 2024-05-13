const cartArray = [
  {"AVOCADO": {price: 3.0, clearance: true}},
  {"AVOCADO": {price: 3.0, clearance: true}},
  {"KALE": {price: 3.00, clearance: false}}
 ]

let coupons = [
  {item: "AVOCADO", num: 2, cost: 5.00}]

const consolidateCart = (cart) => {
  
  let newCart = {}
  
  
  cart.forEach(item => {
    
    const itemName = Object.keys(item)[0]
    if (itemName in newCart){
      newCart[itemName].count += 1
    } else {
      
      let itemValues = Object.values(item)[0] 
      
      itemValues["count"] = 1
            
      newCart[Object.keys(item)[0]] = itemValues
    }
  })
  return newCart
 
}



const applyCoupons = (cart, coupons) => {
 
  coupons.forEach((itemCoupon) => {
    let couponFoodName = itemCoupon.item
    let itemAmount = cart[couponFoodName].count 
    let neededQuantitiy = itemCoupon.num
    let couponValues = {
      price: itemCoupon.cost, 
      count: 1, 
      clearance: cart[couponFoodName].clearance
    }
    if (itemAmount >= neededQuantitiy){
      Object.assign(cart, {[`${couponFoodName} W/COUPON`]: couponValues})
      cart[couponFoodName].count = (itemAmount-neededQuantitiy)
    } 
  })
  return cart
}






const applyClearance = (cart) =>{
  // code here
  // check if it has clearance === true
  // then apply 20% clearance to price and updates price
  // else do nothing
  for (let item in cart){
    let itemPrice = cart[item].price 
    if (cart[item].clearance){
      itemPrice = itemPrice - (itemPrice * .20)
      debugger
      cart[item].price = itemPrice
      debugger
    }
  }
  return cart
}

const checkout = (cart, coupons) => {
  // code here
}

const cart = consolidateCart(cartArray)
//applyCoupons(cart, coupons)
console.log(applyClearance(cart))
