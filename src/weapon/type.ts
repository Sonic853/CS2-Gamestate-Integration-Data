interface PropBase {
  /** 武器名称 */
  name: string
  /** 武器皮肤 */
  paintkit: string | "default"
  /** active 在手上，holstered 在背包，reloading 正在装弹 */
  state: "active" | "holstered" | "reloading"
}
interface PropsBase extends PropBase {
  /** 背包数量 */
  ammo_reserve: number
}
interface WeaponBase extends PropsBase {
  /** 当前弹药量 */
  ammo_clip: number
  /** 最高当前弹药量 */
  ammo_clip_max: number
  /** 背包弹药量 */
  ammo_reserve: number
}
interface WeaponWithOutReserveBase extends PropBase {
  /** 当前弹药量 */
  ammo_clip: number
  /** 最高当前弹药量 */
  ammo_clip_max: number
}
/**
 * 步枪
 */
export interface Rifle extends WeaponBase {
  /** 步枪名称 */
  name: "weapon_ak47" | "weapon_aug" | "weapon_famas" | "weapon_galilar" | "weapon_m4a1_silencer" | "weapon_m4a1" | "weapon_sg556"
  /** 步枪类型 */
  type: "Rifle"
}
/**
 * 判断步枪
 */
export const RifleOf = (object: any): object is Rifle => {
  return object && object.type === "Rifle"
}
/**
 * 冲锋枪
 */
export interface SubmachineGun extends WeaponBase {
  /** 冲锋枪名称 */
  name: "weapon_mac10" | "weapon_mp7" | "weapon_mp9" | "weapon_mp5sd" | "weapon_bizon" | "weapon_p90" | "weapon_ump45"
  /** 冲锋枪类型 */
  type: "Submachine Gun"
}
/**
 * 判断冲锋枪
 */
export const SubmachineGunOf = (object: any): object is SubmachineGun => {
  return object && object.type === "Submachine Gun"
}
/**
 * 霰弹枪
 */
export interface Shotgun extends WeaponBase {
  /** 霰弹枪名称 */
  name: "weapon_mag7" | "weapon_nova" | "weapon_sawedoff" | "weapon_xm1014"
  /** 霰弹枪类型 */
  type: "Shotgun"
}
/**
 * 判断霰弹枪
 */
export const ShotgunOf = (object: any): object is Shotgun => {
  return object && object.type === "Shotgun"
}
/**
 * 机枪
 * 
 * "Hey man! Hold it down, It"s a Machine Gun! Machine Gun!"
 * 
 * "Haha, Okay!"
 */
export interface MachineGun extends WeaponBase {
  /** 机枪名称 */
  name: "weapon_m249" | "weapon_negev"
  /** 机枪类型 */
  type: "Machine Gun"
}
/**
 * 判断机枪
 */
export const MachineGunOf = (object: any): object is MachineGun => {
  return object && object.type === "Machine Gun"
}
/**
 * 狙击枪
 */
export interface SniperRifle extends WeaponBase {
  /** 狙击枪名称 */
  name: "weapon_awp" | "weapon_g3sg1" | "weapon_scar20" | "weapon_ssg08"
  /** 狙击枪类型 */
  type: "SniperRifle"
}
/**
 * 判断狙击枪
 */
export const SniperRifleOf = (object: any): object is SniperRifle => {
  return object && object.type === "SniperRifle"
}
/**
 * 手枪
 */
export interface Pistol extends WeaponBase {
  /** 手枪名称 */
  name: "weapon_revolver" | "weapon_usp_silencer" | "weapon_cz75a" | "weapon_deagle" | "weapon_elite" | "weapon_fiveseven" | "weapon_glock" | "weapon_hkp2000" | "weapon_p250" | "weapon_tec9"
  /** 手枪类型 */
  type: "Pistol"
}
/**
 * 判断手枪
 */
export const PistolOf = (object: any): object is Pistol => {
  return object && object.type === "Pistol"
}
/**
 * 电击枪
 */
export interface Taser extends WeaponBase {
  /** 电击枪名称 */
  name: "weapon_taser"
}
/**
 * 判断电击枪
 */
export const TaserOf = (object: any): object is Taser => {
  return object && object.name === "weapon_taser"
}
/**
 * 🛡️
 * 
 * 盾牌
 */
export interface Shield extends PropBase {
  /** 盾牌名称 */
  name: "weapon_shield"
}
/**
 * 判断盾牌
 */
export const ShieldOf = (object: any): object is Shield => {
  return object && object.name === "weapon_shield"
}
/**
 * 投掷物
 */
export interface Grenade extends PropsBase {
  /** 投掷物名称 */
  name: "weapon_hegrenade" | "weapon_flashbang" | "weapon_smokegrenade" | "weapon_decoy" | "weapon_incgrenade" | "weapon_molotov" | "weapon_snowball" | "weapon_tagrenade"
  /** 投掷物类型 */
  type: "Grenade"
}
/**
 * 判断投掷物
 */
export const GrenadeOf = (object: any): object is Grenade => {
  return object && object.type === "Grenade"
}
/**
 * 🔪️
 * 
 * 菜刀（★）| 默认皮肤(崭新出土)
 */
export interface Knife extends PropBase {
  /** 匕首名称 */
  name: string | "weapon_knife"
  /** 匕首类型 */
  type: "Knife"
}
/**
 * 判断🔪️
 */
export const KnifeOf = (object: any): object is Knife => {
  return object && object.type === "Knife"
}
/**
 * C4
 */
export interface C4 extends PropBase {
  /** C4 名称 */
  name: "weapon_c4"
  /** C4 类型 */
  type: "C4"
}
/**
 * 判断C4
 */
export const C4Of = (object: any): object is C4 => {
  return object && object.type === "C4"
}
/**
 * 排斥装置
 */
export interface ZoneRepulsor extends PropBase {
  /** 排斥装置名称 */
  name: "weapon_zone_repulsor"
}
/**
 * 判断排斥装置
 */
export const ZoneRepulsorOf = (object: any): object is ZoneRepulsor => {
  return object && object.name === "weapon_zone_repulsor"
}
/**
 * 特训助手
 */
export interface Tablet extends WeaponWithOutReserveBase {
  /** 特训助手名称 */
  name: "weapon_tablet"
  /** 特训助手类型 */
  type: "Tablet"
}
/**
 * 判断特训助手
 */
export const TabletOf = (object: any): object is Tablet => {
  return object && object.type === "Tablet"
}
/**
 * 医疗针
 */
export interface StackableItem extends PropsBase {
  /** 医疗针名称 */
  name: "weapon_healthshot"
  /** 医疗针类型 */
  type: "StackableItem"
}
/**
 * 判断医疗针
 */
export const StackableItemOf = (object: any): object is StackableItem => {
  return object && object.type === "StackableItem"
}
/**
 * 遥控炸弹
 */
export interface BreachCharge extends WeaponBase {
  /** 遥控炸弹名称 */
  name: "weapon_breachcharge"
  /** 遥控炸弹类型 */
  type: "Breach Charge"
}
/**
 * 判断遥控炸弹
 */
export const BreachChargeOf = (object: any): object is BreachCharge => {
  return object && object.type === "Breach Charge"
}
/**
 * 弹射地雷
 */
export interface BumpMine extends WeaponBase {
  /** 弹射地雷名称 */
  name: "weapon_bumpmine"
  /** 弹射地雷类型 */
  type: "Bump Mine"
}
/**
 * 判断弹射地雷
 */
export const BumpMineOf = (object: any): object is BumpMine => {
  return object && object.type === "Bump Mine"
}
/**
 * 只判断是否主武器
 */
export const Gun = (object: any): object is Rifle | SubmachineGun | Shotgun | MachineGun | SniperRifle => {
  if (object) switch (true) {
    case RifleOf(object):
    case SubmachineGunOf(object):
    case ShotgunOf(object):
    case MachineGunOf(object):
    case SniperRifleOf(object):
      return true
  }
  return false
}