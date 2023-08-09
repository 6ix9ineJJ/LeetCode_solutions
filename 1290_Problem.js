var getDecimalValue = function(head) {
    
    let sum = [];
    let total =0;
    let temp=head

    while(temp!=null){
        sum.push(temp.val)
        temp=temp.next;
    }
    for(let i=0; i<sum.length; i++){
      total += sum[i]*Math.pow(2,sum.length-1-i)
    }
    return total
};