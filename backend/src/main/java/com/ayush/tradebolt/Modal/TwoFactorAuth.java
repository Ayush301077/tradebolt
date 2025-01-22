package com.ayush.tradebolt.Modal;


import com.ayush.tradebolt.domain.VerificationType;
import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable   //not standalone enmtity but is embedded wih user.java
public class TwoFactorAuth {
    private boolean isEnabled = false;      // to indicate if two facrtor auth is enabled for user
    private VerificationType sendTo;

    public boolean isEnabled() {
        return isEnabled;
    }

    public void setEnabled(boolean enabled) {
        isEnabled = enabled;
    }

    public VerificationType getSendTo() {
        return sendTo;
    }

    public void setSendTo(VerificationType sendTo) {
        this.sendTo = sendTo;
    }
}
