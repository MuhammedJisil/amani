import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  @media (max-width: 768px) {
    display: none;
  }

  .container {
    --color-pure: #fff;
    --color-primary: #000000;
    --color-secondary: #ff0000;
    --muted: #8B0000;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wrap {
    --round: 10px;
    --p-x: 8px;
    --p-y: 4px;
    display: flex;
    align-items: center;
    padding: var(--p-y) var(--p-x);
    position: relative;
    background: var(--color-primary);
    border-radius: var(--round);
    border: 2px solid var(--color-secondary);
    box-shadow: 0 4px 20px rgba(255, 0, 0, 0.3);
    max-width: 100%;
    overflow-x: auto;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
  }

  .wrap input {
    height: 0;
    width: 0;
    position: absolute;
    overflow: hidden;
    display: none;
    visibility: hidden;
  }

  .label {
    cursor: pointer;
    outline: none;
    font-size: 0.875rem;
    letter-spacing: initial;
    font-weight: 500;
    color: var(--color-secondary);
    background: transparent;
    padding: 12px 16px;
    min-width: 100px;
    text-decoration: none;
    -webkit-user-select: none;
    user-select: none;
    transition: color 0.25s ease;
    outline-offset: -6px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    -webkit-tap-highlight-color: transparent;
    white-space: nowrap;
    font-family: 'Playfair Display', serif;
  }
  
  .label span {
    display: block;
    text-align: center;
  }

  .wrap input[class*="rd-"]:checked + label {
    color: var(--color-pure);
  }

  .bar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: absolute;
    transform-origin: 0 0 0;
    height: 100%;
    z-index: 0;
    transition: all 0.5s cubic-bezier(0.33, 0.83, 0.99, 0.98);
  }
  
  .bar::before,
  .bar::after {
    content: "";
    position: absolute;
    height: 4px;
    width: 100%;
    background: var(--color-secondary);
  }
  
  .bar::before {
    top: 0;
    border-radius: 0 0 9999px 9999px;
  }
  
  .bar::after {
    bottom: 0;
    border-radius: 9999px 9999px 0 0;
  }

  .slidebar {
    position: absolute;
    height: calc(100% - (var(--p-y) * 4));
    border-radius: calc(var(--round) - var(--p-y));
    background: var(--muted);
    transform-origin: 0 0 0;
    z-index: 0;
    transition: all 0.5s cubic-bezier(0.33, 0.83, 0.99, 0.98);
  }

  .rd-1:checked ~ .bar,
  .rd-1:checked ~ .slidebar {
    transform: translateX(0);
    width: 100px;
  }
  
  .rd-1 + label:hover ~ .slidebar {
    transform: translateX(0) scaleX(1);
    width: 100px;
  }
  
  .rd-2:checked ~ .bar,
  .rd-2:checked ~ .slidebar {
    transform: translateX(100px);
    width: 100px;
  }
  
  .rd-2 + label:hover ~ .slidebar {
    transform: translateX(100px) scaleX(1);
    width: 100px;
  }
  
  .rd-3:checked ~ .bar,
  .rd-3:checked ~ .slidebar {
    transform: translateX(200px);
    width: 100px;
  }
  
  .rd-3 + label:hover ~ .slidebar {
    transform: translateX(200px) scaleX(1);
    width: 100px;
  }
  
  .rd-4:checked ~ .bar,
  .rd-4:checked ~ .slidebar {
    transform: translateX(300px);
    width: 100px;
  }
  
  .rd-4 + label:hover ~ .slidebar {
    transform: translateX(300px) scaleX(1);
    width: 100px;
  }
`;

const BottomNav = ({ activeSection, onNavigate }) => {
  const handleClick = (e, sectionId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };

  return (
    <StyledWrapper>
      <div>
        <div className="container">
          <div className="wrap">
            <input 
              checked={activeSection === 'home'} 
              type="radio" 
              id="rd-1" 
              name="radio" 
              className="rd-1" 
              hidden 
              readOnly
            />
            <label 
              htmlFor="rd-1" 
              className="label" 
              style={{zIndex: 4}}
              onClick={(e) => handleClick(e, 'home')}
            >
              <span>Home</span>
            </label>
            
            <input 
              checked={activeSection === 'about'} 
              type="radio" 
              id="rd-2" 
              name="radio" 
              className="rd-2" 
              hidden 
              readOnly
            />
            <label 
              htmlFor="rd-2" 
              className="label" 
              style={{zIndex: 5}}
              onClick={(e) => handleClick(e, 'about')}
            >
              <span>About Me</span>
            </label>
            
            <input 
              checked={activeSection === 'releases'} 
              type="radio" 
              id="rd-3" 
              name="radio" 
              className="rd-3" 
              hidden 
              readOnly
            />
            <label 
              htmlFor="rd-3" 
              className="label" 
              style={{zIndex: 2}}
              onClick={(e) => handleClick(e, 'releases')}
            >
              <span>Releases</span>
            </label>
            
            <input 
              checked={activeSection === 'contact'} 
              type="radio" 
              id="rd-4" 
              name="radio" 
              className="rd-4" 
              hidden 
              readOnly
            />
            <label 
              htmlFor="rd-4" 
              className="label" 
              style={{zIndex: 3}}
              onClick={(e) => handleClick(e, 'contact')}
            >
              <span>Contact</span>
            </label>
            
            <div className="bar" />
            <div className="slidebar" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default BottomNav;