import React, { useEffect, useState } from "react";
import { FixedSizeList as List } from "react-window";

const ChooseFromListComponent = ({ id, list, name, usedIngredients }) => {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        console.log(usedIngredients);
    });

    const Ingredient = ({ index, style }) => {
        return (
            <div>
                <button
                    type="button"
                    onClick={() => console.log(list[index].id)}
                    style={{
                        ...style,
                        color:
                            id === index + 1 &&
                            usedIngredients.includes(index + 1)
                                ? "green"
                                : "black",
                    }}
                >
                    {list[index].name}
                </button>
            </div>
        );
    };

    return (
        <div>
            <button type="button" onClick={() => setIsShown(!isShown)}>
                {isShown ? "Закрыть меню" : "Выбрать " + name}
            </button>
            {isShown && (
                <div className="choose_list">
                    <List
                        height={150}
                        itemCount={list.length}
                        itemSize={35}
                        width={300}
                    >
                        {Ingredient}
                    </List>
                </div>
            )}
            {list.length ? (
                <p>Выбранный ингредиент: {list[id - 1].name}</p>
            ) : (
                <p></p>
            )}
        </div>
    );
};

export default ChooseFromListComponent;
