"use strict";
(() => {
    const fullName = (firstName, ...restOfName) => {
        return `${firstName} ${restOfName.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent', 'Superman', 'Kal-El');
    console.log({ superman });
})();
