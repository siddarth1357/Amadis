document.addEventListener('DOMContentLoaded', () => {
    const saveKey = document.getElementById('saveKey');
    const saveValue = document.getElementById('saveValue');
    const saveBtn = document.getElementById('saveBtn');

    const getKey = document.getElementById('getKey');
    const getBtn = document.getElementById('getBtn');
    const result = document.getElementById('result');

    const deleteKey = document.getElementById('deleteKey');
    const deleteBtn = document.getElementById('deleteBtn');

    const clearBtn = document.getElementById('clearBtn');
    const showBtn = document.getElementById('showBtn');
    const display = document.getElementById('display');

    if (!saveKey || !saveValue || !saveBtn || !getKey || !getBtn || !result || !deleteKey || !deleteBtn || !clearBtn || !showBtn || !display) {
        console.error('Some required elements were not found in the page.');
        return;
    }
    saveBtn.addEventListener('click', function () {
        const key = saveKey.value.trim();
        const value = saveValue.value.trim();

        if (key === '' || value === '') {
            alert('Please enter both key and value!');
            return;
        }

        localStorage.setItem(key, value);
        alert(`✅ Saved: "${key}" = "${value}"`);

        saveKey.value = '';
        saveValue.value = '';
        showAllData();
    });
    getBtn.addEventListener('click', function () {
        const key = getKey.value.trim();

        if (key === '') {
            alert('Please enter a key!');
            return;
        }

        const value = localStorage.getItem(key);

        if (value === null) {
            result.textContent = `❌ "${key}" not found!`;
            result.style.color = 'red';
        } else {
            result.textContent = `✅ "${key}" = "${value}"`;
            result.style.color = 'green';
        }

        getKey.value = '';
    });
    deleteBtn.addEventListener('click', function () {
        const key = deleteKey.value.trim();

        if (key === '') {
            alert('Please enter a key!');
            return;
        }

        if (localStorage.getItem(key) === null) {
            alert(`❌ "${key}" not found!`);
        } else {
            localStorage.removeItem(key);
            alert(`✅ Deleted: "${key}"`);
            showAllData();
        }

        deleteKey.value = '';
    });
    clearBtn.addEventListener('click', function () {
        if (confirm('⚠️ Delete EVERYTHING?')) {
            localStorage.clear();
            alert('✅ Everything cleared!');
            showAllData();
        }
    });
    function showAllData() {
        const items = [];

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            items.push(`${key}: ${value}`);
        }

        if (items.length === 0) {
            display.textContent = '(No data saved)';
        } else {
            display.textContent = items.join('\n');
        }
    }

    showBtn.addEventListener('click', showAllData);

    showAllData();
});