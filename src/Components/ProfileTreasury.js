
const useBasicProfileStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    info: {
        marginRight: 12,
    },
    avatar: {
        borderRadius: 8,
        backgroundColor: '#495869'
    },
    overline: {
        fontSize: 10,
        textTransform: 'uppercase',
        letterSpacing: 1,
        color: '#8D9CAD',
    },
    name: {
        fontSize: 14,
        fontWeight: 500,
        color: '#495869',
    }
})
const styles = useBasicProfileStyles();

const BasicProfile = () => {
    const styles = useBasicProfileStyles()
    return (
        <div className={styles.root}>
            <Avatar className={styles.avatar}>S</Avatar>
            <div className={styles.info}>
                <Typography className={styles.overline}>
                    CREATOR
                </Typography>
                <Typography className={styles.name}>
                    siriwatknp
                </Typography>
            </div>
        </div>
    )
}
