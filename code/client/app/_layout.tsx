import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useLayoutEffect } from "react";
import { usePathname } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default () => {
	// const pathname = usePathname();
	const [fontsLoaded] = useFonts({
		"open-sans-light": require("../assets/fonts/OpenSans-Light.ttf"),
		"open-sans-light-italic": require("../assets/fonts/OpenSans-LightItalic.ttf"),
		"open-sans": require("../assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-italic": require("../assets/fonts/OpenSans-Italic.ttf"),
		"open-sans-medium": require("../assets/fonts/OpenSans-Medium.ttf"),
		"open-sans-medium-italic": require("../assets/fonts/OpenSans-MediumItalic.ttf"),
		"open-sans-semi-bold": require("../assets/fonts/OpenSans-SemiBold.ttf"),
		"open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
		"open-sans-extra-bold": require("../assets/fonts/OpenSans-ExtraBold.ttf"),
	});

	useLayoutEffect(() => {
		(async () => {
			if (fontsLoaded) {
				await SplashScreen.hideAsync();
			}
		})();
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<Stack>
			<Stack.Screen name="index" />
		</Stack>
	);
};
