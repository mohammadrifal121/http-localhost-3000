// report.js

document.addEventListener('DOMContentLoaded', () => {
    const dailyReportButton = document.getElementById('daily-report');
    const monthlyReportButton = document.getElementById('monthly-report');
    const reportContainer = document.getElementById('report-container');

    dailyReportButton.addEventListener('click', generateDailyReport);
    monthlyReportButton.addEventListener('click', generateMonthlyReport);

    function generateDailyReport() {
        // Logic to fetch and display daily attendance report
        const reportData = fetchAttendanceData('daily');
        displayReport(reportData, 'Daily Attendance Report');
    }

    function generateMonthlyReport() {
        // Logic to fetch and display monthly attendance report
        const reportData = fetchAttendanceData('monthly');
        displayReport(reportData, 'Monthly Attendance Report');
    }

    function fetchAttendanceData(type) {
        // Placeholder for fetching attendance data based on type
        // This should be replaced with actual data fetching logic
        return [
            { name: 'Nama Siswa 1', nisn: '0001', status: 'Hadir' },
            { name: 'Nama Siswa 2', nisn: '0002', status: 'Izin' },
        ];
    }

    function displayReport(data, title) {
        reportContainer.innerHTML = `<h2>${title}</h2>`;
        const table = document.createElement('table');
        table.innerHTML = `
            <tr>
                <th>NISN</th>
                <th>Nama Siswa</th>
                <th>Status</th>
            </tr>
        `;
        data.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.nisn}</td>
                <td>${student.name}</td>
                <td>${student.status}</td>
            `;
            table.appendChild(row);
        });
        reportContainer.appendChild(table);
    }
});