plugins {
    id("com.android.application")
}

android {
    namespace = "com.doma.wearosapp"
    compileSdk = 33

    defaultConfig {
        applicationId = "com.doma.wearosapp"
        minSdk = 26
        targetSdk = 33
        versionCode = 1
        versionName = "1.0"
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }
}

dependencies {
    implementation("androidx.core:core-ktx:1.6.0")
    implementation("androidx.appcompat:appcompat:1.3.1")
}
