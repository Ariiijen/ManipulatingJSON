// Insert Data button
document.getElementById('insertBtn').addEventListener('click', function() {
    var msg = document.getElementById('message');
    msg.className = 'loading';
    msg.innerHTML = 'Inserting data...';
    msg.style.display = 'block';
    
    fetch('insert_json.php', { method: 'POST' })
        .then(function(res) { return res.json(); })
        .then(function(result) {
            if (result.success) {
                msg.className = 'success';
                msg.innerHTML = result.message;
            } else {
                msg.className = 'error';
                msg.innerHTML = result.message;
            }
        })
        .catch(function(err) {
            msg.className = 'error';
            msg.innerHTML = 'Error: ' + err.message;
        });
    
    setTimeout(function() {
        msg.style.display = 'none';
    }, 3000);
});

// Display Data button
document.getElementById('displayBtn').addEventListener('click', function() {
    var container = document.getElementById('data-container');
    container.innerHTML = 'Loading...';
    
    fetch('display_data.php')
        .then(function(res) { return res.json(); })
        .then(function(data) {
            if (!data || data.length === 0) {
                container.innerHTML = '<div class="no-data">No data found. Click "Insert Data" first.</div>';
                return;
            }
            
            var html = '';
            for (var i = 0; i < data.length; i++) {
                var dept = data[i];
                var employees = dept.employee_details;
                
                html += '<div class="department-title">';
                html += dept.department_name + ' Department | City: ' + dept.city_name + ' | Employees: ' + employees.length;
                html += '</div>';
                
                html += '<table>';
                html += '<tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Hire Date</th><th>Job Title</th><th>Salary</th></tr>';
                
                for (var j = 0; j < employees.length; j++) {
                    var emp = employees[j];
                    html += '<tr>';
                    html += '<td>' + emp.employee_id + '</td>';
                    html += '<td>' + emp.first_name + '</td>';
                    html += '<td>' + emp.last_name + '</td>';
                    html += '<td>' + emp.hire_date + '</td>';
                    html += '<td>' + emp.job_title + '</td>';
                    html += '<td class="salary">$' + emp.salary.toLocaleString() + '</td>';
                    html += '</tr>';
                }
                
                html += '</table>';
            }
            container.innerHTML = html;
        })
        .catch(function(err) {
            container.innerHTML = '<div class="no-data">Error: ' + err.message + '</div>';
        });
});

// Delete All Data button
document.getElementById('deleteBtn').addEventListener('click', function() {
    if (confirm('Delete all data? This cannot be undone.')) {
        var msg = document.getElementById('message');
        msg.className = 'loading';
        msg.innerHTML = 'Deleting data...';
        msg.style.display = 'block';
        
        fetch('delete.php', { method: 'POST' })
            .then(function(res) { return res.json(); })
            .then(function(result) {
                if (result.success) {
                    msg.className = 'success';
                    msg.innerHTML = result.message;
                    document.getElementById('data-container').innerHTML = '<div class="no-data">Data deleted. Click "Display Data" to see empty table.</div>';
                } else {
                    msg.className = 'error';
                    msg.innerHTML = result.message;
                }
            })
            .catch(function(err) {
                msg.className = 'error';
                msg.innerHTML = 'Error: ' + err.message;
            });
        
        setTimeout(function() {
            msg.style.display = 'none';
        }, 3000);
    }
});