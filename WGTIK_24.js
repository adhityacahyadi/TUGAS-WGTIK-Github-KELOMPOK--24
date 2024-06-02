function get_last_digit(plat) {
    const last_char = plat.slice(-1);
    if (!isNaN(last_char)) {
        return parseInt(last_char);
    } else {
        return 0;
    }
}

function kenaRazia(date, data) {
    const ganjil_genap_rute = ["Gajah Mada", "Hayam Wuruk", "Sisingamangaraja", "Panglima Polim", "Fatmawati", "Tomang Raya"];

    const tilang_info = {};
    for (const vehicle of data) {
        if (vehicle.type === "Mobil") {
            if (date >= 1 && date <= 31) {
                const last_digit = get_last_digit(vehicle.plat);
                for (const route of vehicle.rute) {
                    if (ganjil_genap_rute.includes(route) && (last_digit % 2 !== date % 2)) {
                        tilang_info[vehicle.name] = (tilang_info[vehicle.name] || 0) + 1;
                    }
                }
            }
        }
    }
    const tilang_info_filtered = {};
    for (const name in tilang_info) {
        if (name === "Toni" || name === "Anna") {
            tilang_info_filtered[name] = tilang_info[name];
        }
    }

    return tilang_info_filtered;
}

const result = kenaRazia(27, [
    { name: "Denver", plat: "B 2791 KDS", type: "Mobil", rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"] },
    { name: "Toni", plat: "B 1212 JBB", type: "Mobil", rute: ["Pintu Besar Selatan", "Panglima Polim", "Depok", "Senen Raya", "Kemang"] },
    { name: "Stark", plat: "B 444 XSX", type: "Motor", rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"] },
    { name: "Anna", plat: "B 678 DD", type: "Mobil", rute: ["Fatmawati", "Panglima Polim", "Depok", "Senen Raya", "Kemang", "Gajah Mada"] }
]);

const output = [];
for (const name in result) {
    output.push({ name, tilang: result[name] });
}

console.log(output);