import { Injectable } from "@angular/core";
import { ClipboardService } from "ngx-clipboard";
import * as Notiflix from "notiflix";


/**
 * ==============================
 * 🔰📡 SOME UTILITIES HELPER 📡🔰
 * ==============================
 */
@Injectable({
    providedIn: 'root'
})
export class UtilsHelper {
    // ============================================================
    constructor(private clipboardService: ClipboardService) { }
    // ============================================================

    // ************************************************************************|
    public static reloadPage(): void {
        window.location.reload();
    }
    // ************************************************************************|
    /**
     * Copy Text To the User's Clipboard.
     * @using : ngx-clipboard
     * @param text -> TAKES ONLY STRINGS
     */
    public copyToClipboard(text: string): Promise<void> {
        return navigator.clipboard.writeText(text)
            .then(() => Notiflix.Notify.success('Copied in Clipboard ! ✨'))
            .catch((err) => {
                console.error(err);
                return Notiflix.Notify.failure('🚨 Unable to copy text ! 🚨')
            });

    }

    
}