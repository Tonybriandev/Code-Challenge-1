function grossSalary (amount) {
    if (amount <= 24000) {
        return amount * 0.1;
    }
    else if (amount > 24000 && amount <= 48000) {
        return ((amount-24000) * 0.15) + (24000 * 0.10)
    }
    else if (amount > 48000 && amount <=64000) {
        return ((amount-48000) * 0.20) + (48000 * 0.1) + (24000 * 0.15)
    }
    else if {
        return ((amount-64000) * 0.3) + (64000 * 0.1) + (48000 * 0.1) + (24000 * 0.20)
    }
    else {
        return amount * 0.35
    }