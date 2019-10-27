import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputProtector]'
})
export class InputProtectorDirective {

  constructor(private inputElement: ElementRef) {}

  @HostListener('keydown', ['$event']) onKeyDown(e: KeyboardEvent): boolean {
    if (
      // Allow: Delete, Backspace, Tab, Escape, Enter
      [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
      (e.keyCode === 65 && e.ctrlKey === true) || // Allow: Ctrl+A
      (e.keyCode === 67 && e.ctrlKey === true) || // Allow: Ctrl+C
      (e.keyCode === 86 && e.ctrlKey === true) || // Allow: Ctrl+V
      (e.keyCode === 88 && e.ctrlKey === true) || // Allow: Ctrl+X
      (e.keyCode === 65 && e.metaKey === true) || // Cmd+A (Mac)
      (e.keyCode === 67 && e.metaKey === true) || // Cmd+C (Mac)
      (e.keyCode === 86 && e.metaKey === true) || // Cmd+V (Mac)
      (e.keyCode === 88 && e.metaKey === true) || // Cmd+X (Mac)
      (e.keyCode >= 35 && e.keyCode <= 39) // Home, End, Left, Right
    ) {
      return true;  // let it happen, don't do anything
    }
    return !!e.key.match(/[0-9]/g);
  }

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const pastedInput: string = event.clipboardData.getData('text/plain').replace(/\D/g, ''); // get a digit-only string
    document.execCommand('insertText', false, pastedInput);
  }

  @HostListener('drop', ['$event']) onDrop(event: DragEvent) {
    event.preventDefault();
    const textData = event.dataTransfer.getData('text').replace(/\D/g, '');
    this.inputElement.nativeElement.focus();
    document.execCommand('insertText', false, textData);
  }
}
