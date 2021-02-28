import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FixedSizeList as List } from "react-window";
import styled from "styled-components";
import { clearUsers, fetchUsers } from "../../../actions/usersActions";

const ButtonContainer = styled.div`
    border: 1px solid black;
    padding: 10px;
    display: flex;
    justify-content: space-between;
`;

const AdminPanelPageUsersList = () => {
    const dispatch = useDispatch();
    const usersState = useSelector((state) => state.usersState);

    useEffect(() => {
        dispatch(fetchUsers());

        return () => {
            dispatch(clearUsers());
        };
    }, []);

    const Row = ({ index, style }) => {
        if (index === 1) {
            console.log(style);
        }

        return (
            <ButtonContainer style={style}>
                <p>{usersState.users[index].name}</p>
                <button>Удалить</button>
            </ButtonContainer>
        );
    };

    switch (usersState.status) {
        case "loading": {
            return <div>Загрузка</div>;
        }
        case "ok": {
            return (
                <List
                    height={150}
                    itemCount={usersState.users.length}
                    itemSize={50}
                    width={300}
                >
                    {Row}
                </List>
            );
        }
        default: {
            return <div></div>;
        }
    }
};

export default AdminPanelPageUsersList;
