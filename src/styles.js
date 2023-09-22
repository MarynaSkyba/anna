export const colors = {
    main: "#E2D7B6",
    mainGrey: "#6F6E69",
    ivory: "#FBFAEF",
    accent: "#D89060",
    grey: "#596869",
    white: "#ffffff"
   
  };
  
  export const MyThemeLight = {
    dark: false,
    colors: {
      primary: colors.mainBlue,
      background: colors.backgroundGrey,
      card: colors.backgroundGrey,
      text: colors.text,
      border: colors.borderGrey,
      notification: "red",
    },
  };
  
  export const MyThemeDark = {
    dark: true,
    colors: {
      primary: colors.white,
      background: colors.darkMode,
      card: colors.darkMode,
      text: colors.white,
      border: colors.borderGrey,
      notification: "red",
    },
  };
  
  export const general = {
    container: {
      flex: 1,
      marginHorizontal: 20,
    },
    input: {
      flexDirection: "row",
      alignContent: "center",
      marginVertical: 4,
      height: 40,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: colors.main,
      paddingHorizontal: 10,
      paddingVertical: 8,
      backgroundColor: "#fff",
    },
    maintitle: {
    //   fontFamily: "Caveat-SemiBold",
      fontSize: 40,
      color: colors.main,
      textAlign: "center",
    },
    subtitleContainer: {
      backgroundColor: colors.white,
      marginVertical: 10,
    },
    subtitle: {
    //   fontFamily: "Caveat-Bold",
      fontSize: 30,
      color: colors.main,
      textAlign: "center",
    },
  };
  



