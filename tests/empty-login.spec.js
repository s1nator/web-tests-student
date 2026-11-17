import { test, expect } from '@playwright/test';

test('пустая форма показывает ошибки email и пароля', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', {
  name: 'Вход и Регистрация',
  exact: true,
}).click();
  await page.getByRole('button', { name: 'Войти', exact: true }).click();
  await expect(page.getByText('Email обязателен')).toBeVisible();
  await expect(page.getByText('Пароль обязателен')).toBeVisible();
});
