import styles from '../styles/Components/Profile.module.scss';
function Profile() {
    return (
        <div className={styles.profileContainer}>

            <img src="https://github.com/diego3g.png" alt="" />
            <div>
                <strong>Adrian Américo</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                    Level 1
                </p>
            </div>
        </div>
    )
}
export default Profile;