package com.reactnative;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.microsoft.codepush.react.CodePush;
import cn.jpush.reactnativejpush.JPushPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "reactNative";
    }
}
