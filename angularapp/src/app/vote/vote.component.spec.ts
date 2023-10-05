import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should increment likes when like button is clicked', () => {
    // const product = { id: 1, name: 'Noodles', totalVotes: 0, likes: 0, dislikes: 0, img: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=600' };
    const product = component.products[0];
    component.like(product);
    expect(product.likes).toBe(1);
  });

  it('should increment dislikes when dislike button is clicked', () => {
    const product = { id: 1, name: 'Noodles', totalVotes: 0, likes: 0, dislikes: 0, img: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=600' };
    component.dislike(product);
    expect(product.dislikes).toBe(1);
  });

  it('should return true when likes and dislikes reach 10', () => {
    const product = { id: 1, name: 'Noodles', totalVotes: 0, likes: 5, dislikes: 5, img: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=600' };
    const result = component.totalVotes(product);
    expect(result).toBe(true);
  });

  it('should return false when likes and dislikes are less than 10', () => {
    const product = { id: 1, name: 'Noodles', totalVotes: 0, likes: 3, dislikes: 2, img: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=600' };
    const result = component.totalVotes(product);
    expect(result).toBe(false);
  });
});
