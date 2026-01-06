const students = [
    { nisn: '0001', name: 'Nama Siswa', status: '' },
    { nisn: '0002', name: 'Nama Siswa', status: '' },
];

document.addEventListener('DOMContentLoaded', () => {
    const attendanceTableBody = document.getElementById('attendance-table-body');
    const addStudentButton = document.getElementById('add-student-button');
    const presentAllButton = document.getElementById('present-all-button');
    const saveButton = document.getElementById('save-button');

    function renderStudents() {
        attendanceTableBody.innerHTML = '';
        students.forEach((student, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.nisn}</td>
                <td>${student.name}</td>
                <td>
                    <select id="status-${index}">
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

    presentAllButton.addEventListener('click', () => {
        students.forEach((student, index) => {
            document.getElementById(`status-${index}`).value = 'Hadir';
        });
    });

    addStudentButton.addEventListener('click', () => {
        const newNisn = prompt('Masukkan NISN Siswa:');
        const newName = prompt('Masukkan Nama Siswa:');
        if (newNisn && newName) {
            students.push({ nisn: newNisn, name: newName, status: '' });
            renderStudents();
        }
    });

    saveButton.addEventListener('click', () => {
        students.forEach((student, index) => {
            student.status = document.getElementById(`status-${index}`).value;
        });
        alert('Absen telah disimpan!');
    });

    renderStudents();
});