import  {useTheme} from '../themes/ThemeContext';

const Button = () => {
    const {toggleTheme} = useTheme();
    return <Button onClick={toggleTheme}>Toggle Theme</Button>;
};

export default Button;
