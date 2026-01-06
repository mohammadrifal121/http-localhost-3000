const students = [
    { nisn: '0001', name: 'Nama Siswa', status: '' },
    { nisn: '0002', name: 'Nama Siswa', status: '' }
];

document.addEventListener('DOMContentLoaded', () => {
    const attendanceTableBody = document.getElementById('attendance-table-body');
    const presentButton = document.getElementById('present-all');
    const addStudentButton = document.getElementById('add-student');
    const saveButton = document.getElementById('save-attendance');

    function renderStudents() {
        attendanceTableBody.innerHTML = '';
        students.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.nisn}</td>
                <td>${student.name}</td>
                <td>
                    <select onchange="updateStatus('${student.nisn}', this.value)">
                        <option value="">Pilih Status</option>
                        <option value="Hadir">Hadir</option>
                        <option value="Izin">Izin</option>
                        <option value="Sakit">Sakit</option>
                        <option value="Absen">Absen</option>
                    </select>
                </td>
            `;
            attendanceTableBody.appendChild(row);
        });
    }

    function updateStatus(nisn, status) {
        const student = students.find(s => s.nisn === nisn);
        if (student) {
            student.status = status;
        }
    }

    presentButton.addEventListener('click', () => {
        students.forEach(student => {
            student.status = 'Hadir';
        });
        renderStudents();
    });

    addStudentButton.addEventListener('click', () => {
        const nisn = prompt('Masukkan NISN Siswa:');
        const name = prompt('Masukkan Nama Siswa:');
        if (nisn && name) {
            students.push({ nisn, name, status: '' });
            renderStudents();
        }
    });

    saveButton.addEventListener('click', () => {
        alert('Absen telah disimpan!');
        // Logic to save attendance data can be added here
    });

    renderStudents();
});