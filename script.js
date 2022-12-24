var get_data=document.querySelector('.form-creation')
get_data.addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log("submitedd")
    var f_name=document.querySelector('#fname')
    var l_name=document.querySelector('#lname')
    var op_address=document.querySelector('#address')
    var op_pin=document.querySelector('#Pin')
    var op_gender=document.querySelector('[name="choose"]')
    var op_Food=document.querySelector('#Food')
    var op_state=document.querySelector('#state')
    var op_country=document.querySelector('#country')
    // console.log(f_name)
    // console.log(l_name)
    // console.log(op_address)
    // console.log(op_pin)
    // console.log(op_gender)
    // console.log(op_Food)
    // console.log(op_state)
    // console.log(op_country)
    console.log(f_name,l_name,op_address,op_pin,op_gender,op_Food,op_state,op_country)
   var data=[f_name,l_name,op_address,op_pin,op_gender,op_Food,op_state,op_country]
   var tr_creating=document.createElement('tr')
   for(let i=0;i<8;i++)
    {
        var td_creating=document.createElement('td')
        td_creating.innerText = data[i].value     
        tr_creating.append(td_creating)
    }
   document.querySelector('tbody').append(tr_creating)
   for(let i of data)
   {
     i.value=''
   }
})