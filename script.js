function sum(a, b) {
    return a + b;
}

document.getElementById('userForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    document.getElementById('output').innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p>`;
    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Clear';
    clearBtn.addEventListener('click', () => {
        document.getElementById('output').innerHTML = '';
    });
    document.getElementById('output').appendChild(clearBtn);
});

document.getElementById('calcBtn').addEventListener('click', () => {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    if (!isNaN(a) && !isNaN(b)) {
        const result = sum(a, b);
        document.getElementById('sumOutput').innerHTML = `Sum: ${result}`;
    } else {
        document.getElementById('sumOutput').innerHTML = 'Please enter valid numbers';
    }
});
