import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'img[appLazyLoad]',
  standalone: true
})
export class LazyLoadImageDirective implements OnInit {
  @Input() appLazyLoad: string = ''; // The actual image source
  
  constructor(private el: ElementRef) {}
  
  ngOnInit() {
    // Setăm direct imaginea pentru a evita problema cu placeholder-ul lipsă
    this.el.nativeElement.src = this.appLazyLoad;
    
    // Folosim Intersection Observer API pentru a detecta când imaginea este aproape de viewport
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Dacă elementul este în viewport
        if (entry.isIntersecting) {
          // Încărcăm imaginea efectivă
          this.el.nativeElement.src = this.appLazyLoad;
          // Oprim observarea după ce s-a încărcat
          observer.unobserve(this.el.nativeElement);
        }
      });
    });
    
    // Începem observarea elementului imagine
    observer.observe(this.el.nativeElement);
  }
}