import React, { useState } from "react";
import AdminPanelPageUsersList from "../components/PagesComponents/AdminPanelPage/AdminPanelPageUsersList";

const AdminPanel = () => {
    const [activeComponent, setActiveComponent] = useState("users");

    return (
        <div>
            <h1>Меню администратора</h1>
            <div>
                <h2>Выбрать список</h2>
                <div>
                    <button onClick={() => setActiveComponent("users")}>
                        Пользователи
                    </button>
                    <button onClick={() => setActiveComponent("recipes")}>
                        Рецепты
                    </button>
                </div>
            </div>
            {activeComponent === "users" && <AdminPanelPageUsersList />}
        </div>
    );
};

export default AdminPanel;
