// Example data
const doneTasks = 5;
const pendingTasks = 10;
const totalTasks = doneTasks + pendingTasks;

// Calculate completion percentage
const completionPercent = totalTasks === 0 ? 0 : Math.round((doneTasks / totalTasks) * 100);

// Update Progress Bar
const progressBar = document.getElementById("taskProgress");
progressBar.style.width = completionPercent + "%";
progressBar.setAttribute("aria-valuenow", completionPercent);
progressBar.textContent = completionPercent + "%";

// Pie Chart Setup
const ctx = document.getElementById("taskChart").getContext("2d");
new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Done', 'Pending'],
        datasets: [{
            data: [doneTasks, pendingTasks],
            backgroundColor: ['#28a745', '#ffc107'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            }
        }
    }
});