USE business_db;

INSERT INTO department (name)
    VALUES
        ("IT"),
        ("HR"),
        ("Public Relations"),
        ("Marketing");

INSERT INTO role (title, salary, department_id)
    VALUES
        ("Manager", 60000, 1),
        ("System Admin", 45000, 1),
        ("Manager", 60000, 2),
        ("Assistant", 30000, 2),
        ("Manager", 80000, 3),
        ("Assistant", 45000, 3),
        ("Manager", 75000, 4),
        ("Assistant", 40000, 4);

    INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
        ("James", "Webb", 1, NULL),
        ("Ben","Holgate", 2, 1),
        ("Samwise", "Gamgee", 3, NULL),
        ("Doc", "Strange", 4,3),
        ("Mary", "Contrary", 5, NULL),
        ("Deeandre", "Reynolds", 6,5),
        ("Pepe", "Silvia", 7, NULL),
        ("Ned", "Stark", 8, 7);
        