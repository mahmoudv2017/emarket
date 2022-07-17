export default function currencyFormatter (number) { 
    return new Intl.NumberFormat(undefined , {
        style : 'currency',
        currency: 'USD'
    }).format(number)
 }