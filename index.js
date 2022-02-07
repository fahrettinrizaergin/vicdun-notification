import './assets/css/style.css';

const bodyRender = () => {
    console.log("----- NOTIFICATION CONTAINER RENDER -----");
    const parent = document.querySelector('body')

    if (document.querySelector('body > div').classList.contains('vicdun-notification-container') === false) {
        const alertDivContainer = document.createElement('div');
        alertDivContainer.classList.add('vicdun-notification-container')
        alertDivContainer.innerHTML = `
            <div class="left-top"></div>
            <div class="center-top"></div>
            <div class="right-top"></div>
            <div class="center"></div>
            <div class="left-bottom"></div>
            <div class="center-bottom"></div>
            <div class="right-bottom"></div>
        `
        parent.insertBefore(alertDivContainer, parent.firstChild)
    }
}

const notification = (data) => {
    const date = new Date 
    const container = document.querySelector(`.vicdun-notification-container > .${emptyControl(data.position) ? data.position : 'right-top'}`)

    const randID = Math.random().toString().substring(2) 

    setTimeout(function () {
        document.getElementById(`vicdun-${randID}-${date.getSeconds()}`).remove()
    }, emptyControl(data.timeout) ? data.timeout * 1000 : 3000)

    const alertDiv = document.createElement('div')
    alertDiv.classList.add('vicdun-alert')
    alertDiv.id = `vicdun-${randID}-${date.getSeconds()}`
    alertDiv.innerHTML += `
        <div class="vicdun-alert-${emptyControl(data.type) ? data.type : 'default'} ${emptyControl(data.class) ? data.class : ''}" style="${emptyControl(data.style) ? data.style : ''}">
            ${emptyControl(data.message) ? data.message : 'Please enter a message'}
        </div>
    `
    // container.insertBefore(alertDiv, container.firstChild)
    container.appendChild(alertDiv)
}
 
const emptyControl = (r) => {
    if (r == null || r == '' || r == undefined) {
        return false
    } else {
        return true
    }
}
 
export {
    bodyRender,
    notification
} 