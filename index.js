function circleArea(x) {
    return x * x * Math.PI
}

function passwordRandom(x) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < x; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

function totalCost(x, y) {
    return x + x * y
}