import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Authors = ({ users }) => {
    return (
        <>
            <h1>Рейтинг авторов</h1>
            <div className='users'>
                {users.map((user, i) => (
                    <div key={i}>
                        <p>
                            {i + 1}.{' '}
                            <Link
                                style={{ color: 'blue' }}
                                to={`/profile/${i + 1}`}
                            >
                                {user.name}
                            </Link>{' '}
                            . Рейтинг: {user.authorRating}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    users: state.users,
});

export default connect(mapStateToProps)(Authors);
